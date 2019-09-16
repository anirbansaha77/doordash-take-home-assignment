export function fetchStaticData(url) {
    return fetch(window.location.origin + url,{
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }).then(res => {
        return res.json();
    }).catch(error => {
       return  error;
    });
}