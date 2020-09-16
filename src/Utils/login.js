export default function saveUserInfoOnLocalStorage(res) {
    const { data } = res

    const userId = data.data._id
    const userName = data.data.username

    localStorage.setItem('InstagramUserId', userId)
    localStorage.setItem('InstagramUserName', userName)
}
