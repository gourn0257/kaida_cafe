export default function BoardWrite(props) {
  console.log('boardwrite', props)
  return(
    <>
      <form id="board-write" action="/library/boardWrite">
        {/* 작성자 */}
        <div id="board-user">
          <input type="text" name="board_user_name" placeholder="닉네임" required/>
          {/* <input type="text" name="board_user_id"/> */}
          <input type="password" name="board_user_password" placeholder="비밀번호" required/>
        </div>
        {/* 게시판 선택 */}
        <select name="board_board" id="board-select" required>
          <option value="자유">자유</option>
          <option value="창작">창작</option>
          <option value="리뷰">리뷰</option>
          <option value="연재기원">연재기원</option>
          <option value="공지">공지</option>
        </select>
        {/* 글쓰기 */}
        <div id="board-title" className="board-textarea">
          <textarea name="board_title" className="full" rows="1" placeholder="제목" required></textarea>
        </div>
        <div id="board-content" className="board-textarea">
          <textarea name="board_content" className="full" rows="40" placeholder="내용" required></textarea>
        </div>
        {/* 버튼 */}
        <input type="submit" value="등 록"/>
      </form>
    </>
  )
}