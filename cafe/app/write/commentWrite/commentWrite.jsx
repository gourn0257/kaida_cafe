export default function CommentWrite(props) {
  return(
    <>
      <form id="" action={'/library/commentWrite'}>
        <input type="hidden" name="board_id" value={props.props}/>
        {/* 작성자 */}
        <div id="board-user">
          <input type="text" name="comment_user_name" placeholder="닉네임" required/>
          {/* <input type="text" name="comment_user_id"/> */}
          <input type="password" name="comment_password" placeholder="비밀번호" required/>
        </div>
        {/* 글쓰기 */}
        <div id="board-content" className="board-textarea">
          <textarea name="comment_content" className="full" rows="4" placeholder="내용" required></textarea>
        <input type="submit" value="등 록"/>
        </div>
        {/* 버튼 */}
      </form>
    </>
  )
}