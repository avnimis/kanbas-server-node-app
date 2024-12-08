import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
    const assignments = model.find({ course: courseId });
    return assignments;
}

export function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}