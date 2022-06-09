export default function handler(req, res) {
    const { id } = req.query
    fetch("https://faiezwaseem.000webhostapp.com/api/article/"+id)
    .then(j =>j.json())
      .then(response => res.status(200).json(response.data) )
      .catch(err => res.status(400).json({ message : "failed : "+err}) )
  }