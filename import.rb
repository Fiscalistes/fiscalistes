require "dato"
require "pp"

# create a DatoCMS client
client = Dato::Site::Client.new("b35fdea9c5080e486b06")

pp client.items.create(
  item_type: "7231",
  nom_complet: "Nom du prospect",
  prenom: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod.",
)
