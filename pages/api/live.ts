import { NextApiRequest, NextApiResponse } from "next";

export default async function live(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: "ok" });
}
