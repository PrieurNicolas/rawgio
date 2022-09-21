import {jeux} from "https://api.rawg.io/api/games?&key=84e32df10f2943d1940ca4a7ff21baf8";

export default function handler(req, res) {
  res.status(200).json(jeux)
}
