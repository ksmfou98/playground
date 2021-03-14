import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video detail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("edit video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("delete video"));

export default videoRouter;
