import { projects } from "../../../data";

export default function handler({ query: { id } }, res) {
  res.status(200).json(projects);
  const filtered = projects.filter((project) => project.id === id);

  console.log(filtered);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `article with ${id} not found` });
  }
}
// export default function handler(req, res) {
//   req.query.id;
//   res.status(200).json(projects);
// }
