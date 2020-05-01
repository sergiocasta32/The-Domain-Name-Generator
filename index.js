function getDomain() {
    let pronoun = ['the', 'our', 'your', 'their'];
    let adj = ['great', 'big', 'small', 'smart'];
    let noun = ['jogger', 'racoon', 'sneaker', 'glasses'];
    //var allDomain = [];
    let i;
    let k;
    let j;
    for (i = 0; i < pronoun.length; i++) {
        for (k = 0; k < adj.length; k++) {
            for (j = 0; j < noun.length; j++) {
                //var allDomain = pronoun[i].concat(adj[k],noun[j],'.com');
                //allDomain.push(pronoun[i] + adj[k] + noun[j].concat('.com', "<br>"));
                document.getElementById('domain').appendChild(document.createElement('p')).innerHTML = pronoun[i] + adj[k] + noun[j]+('.com');
            }
        }
    }
    return (allDomain.join(' '));
}

/*
function onLoad() {
    document.getElementById('domain').innerHTML = getDomain();
}
*/

window.onload = getDomain;