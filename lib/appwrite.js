import { ID, Account, Client, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aorahomework',
    projectId: '670149bd0022d2f3a598',
    databaseId: '67014b3a00242acd9b14',
    userCollectionId: '67014b5a002222b6f621',
    videoCollectionId: '67014b8d00118e1fa9db',
    storageId: '67014d6a002ed6d11daa'
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    
const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password)
      return session;
    } catch (error) {
      throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw Error
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw error
        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}