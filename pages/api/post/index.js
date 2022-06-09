
export default function handler(req, res) {
    fetch("https://faiezwaseem.000webhostapp.com/api/article/")
    .then(j =>j.json())
    .then(response => res.status(200).json(response.data) )
    .catch(err => res.status(400).json({ message : "failed : "+err}) )

}
