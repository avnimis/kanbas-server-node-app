import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
    

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const assignment = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(assignment);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        await assignmentDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });
}