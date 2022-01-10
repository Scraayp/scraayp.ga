import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  responseid: string;
  name: string;
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "Download | Test",
    url: "https://www.google.com",
    responseid: "123",
  });
}
