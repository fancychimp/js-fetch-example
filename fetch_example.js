// development https://rawgit.com/fancychimp/3adc2833e33a383fd981f5d0e8f85848/raw/dd6729c4e16b8bfec23c53eaabcbd90f3c3fb147/sample.json
// production https://cdn.rawgit.com/fancychimp/3adc2833e33a383fd981f5d0e8f85848/raw/dd6729c4e16b8bfec23c53eaabcbd90f3c3fb147/sample.json


function createNode(element) {
	return document.createElement(element);
}


function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('users');
const url = 'https://rawgit.com/fancychimp/3adc2833e33a383fd981f5d0e8f85848/raw/dd6729c4e16b8bfec23c53eaabcbd90f3c3fb147/sample.json';


fetch(url).then(function(resp) {
  return resp.json()
 }).then(function(data) {
	let users = data;
	return users.map(user => {
	  let li = createNode('li'),
	      div = createNode('div'),
	      span = createNode('span');
	  div.innerHTML = user.name;
	  span.innerHTML = `${user.company} ${user.email}`;
	  append(li, div);
	  append(li, span);
	  append(ul, li);
	})
	}).catch(error => {
    console.log(JSON.stringify(error));
});
