require('babel-polyfill');
const SiteClient = require('datocms-client').SiteClient;

const client = new SiteClient('b35fdea9c5080e486b06');

client.fields.all("7231")
.then((fields) => console.log(fields));

client.uploadImage('http://i.giphy.com/NXOF5rlaSXdAc.gif')
.then((image) => {
  return client.items.create({
    itemType: '7231',
    nom_complet: 'My first article!',
    prenom: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod.',
    coverImage: image
  })
})
.then(record => console.log(record));
