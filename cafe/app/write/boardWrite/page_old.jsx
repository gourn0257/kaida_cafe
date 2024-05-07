// 'use client';

import { mysql2 } from "@/library/db";
// import { useRouter } from "next/navigation";

export default function Board() {
  // const router = useRouter();
  return(
    <>
      <form id="board-write" onSubmit>
        {/* 작성자 */}
        <div id="board-user">
          <input type="text" name="board_user_name" placeholder="닉네임" required/>
          {/* <input type="text" name="board_user_id"*/}
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
        <input type="reset" value="취 소"/><input type="submit" value="등 록"/>
      </form>
    </>
  )
}

// form으로 주고받기보다 곧바로 json에 작성하고 /board로 보내게 만들자
// 근데 그게 더 힘들 거 같다 그냥 submit이 처리하게 하자