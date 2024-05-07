'use client';

import { useParams, useRouter } from "next/navigation";

export default function CommentWrite(props) {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  return(
    <>
      <form id="" onSubmit={
        (e)=>{
          e.preventDefault();
          // const comment = [];
          const comment_author = e.target.comment_id.value;
          const comment_password = e.target.comment_password.value;
          const comment_content = e.target.comment_content.value;
          let today = new Date();
          let year = today.getFullYear()-2000; // 년도
          let month = today.getMonth() + 1;  // 월
          let date = today.getDate();  // 날짜
          if (month < 10) month = '0' + month
          if (date < 10) date = '0' + date
          let hours = today.getHours(); // 시
          let minutes = today.getMinutes();  // 분
          const comment_date = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes;

          const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: [{comment_author, comment_password, comment_content, comment_date}]})
          }
          fetch(process.env.NEXT_PUBLIC_API_URL+'board/'+id, options)
            .then(resp=> {
              resp.json();
            })
            .then(result=>{
              router.push('/board');
              router.refresh();
            })
        }
      }>
        {/* 작성자 */}
        <div id="board-user">
          <input type="text" name="comment_id" placeholder="닉네임" required/>
          <input type="password" name="comment_password" placeholder="비밀번호" required/>
        </div>
        {/* 글쓰기 */}
        <div id="board-content" className="board-textarea">
          <textarea name="comment_content" className="full" rows="4" placeholder="내용" required></textarea>
        </div>
        {/* 버튼 */}
        <input type="reset" value="취 소"/><input type="submit" value="등 록"/>
      </form>
    </>
  )
}