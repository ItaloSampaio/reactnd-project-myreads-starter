const url = 'http://clients3.google.com/generate_204'

export default function hasInternetConnection() {
    return fetch(url)    
        .then(() => true)
        .catch(() => false)
}