// builds form for contact edit.

const editCommentForm = (commentId) => {
    const commentVal = commentId .message
    // return `<p id="edit-${comment.id}" class="edit">${comment.user.name}:  ${commentId}</p>`
   return `<input type="text" value="${commentVal}" id="edited-${commentId.id}"/>  <button class="save-edit-btn" id="save-edit-${commentId.id}">Save Edit</button>`


    // return `<input type="text" value="${commentVal}" id="edited-${commentId.id}"/>  <button class="save-edit-btn" id="save-edit-${comment.id}">Save Edit</button>`

}


export default editCommentForm