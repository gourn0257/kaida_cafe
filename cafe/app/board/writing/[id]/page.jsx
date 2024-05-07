import { mysql2 } from "@/library/db";
import CommentWriting from "./commentWriting";
import { Bord_recommendButton2 } from "@/app/library/button";

export default async function Writing(props) {
  // console.log('ㅇㅅㅇ', props)
  // const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`board/${props.params.id}`, {cache: 'no-store'});
  // const board = await resp.json();
  
  const board = await mysql2(`SELECT * FROM boards WHERE id = ?`, [props.params.id]);
  const board_date_time = board[0].date.getTime()
  const board_date_object = new Date(board_date_time+(9 * 60 * 60 * 1000));
  const board_date = board_date_object.toISOString().slice(0, 19).replace("T", " ");
  // console.log(board[0])
  return(
    <>
      <article id="writing">
        <div id="writing-title">
          <h1>{board[0].title}</h1>
          <div id="writing-inf">
            {board[0].author_name}
            👁️‍🗨️{board[0].watch}
            {board_date}
          </div>
        </div>
        <div id="writing-content">
          <pre>
            {board[0].content}
          </pre>
          <button id="writing-recommend">
            {board[0].recommend}
          </button>
          <Bord_recommendButton2 board_id={props.params.id}></Bord_recommendButton2>
        </div>
      </article>
      <CommentWriting props={props.params.id}></CommentWriting>
      {/* <article id="writing">
        <div id="writing-title">
          <h1>{board.board_title}</h1>
          {board.board_author}
          {board.board_watch}
          {board.board_date}
        </div>
        <div id="writing-content">
          <pre>
            {board.board_content}
          </pre>
          <div id="writing-recommend">
            {board.board_recommend}
          </div>
        </div>
      </article>
      <section id="comment">
        <h2>댓글창</h2>
        <article>
          {board.comment.map((data)=>{
            return(
              <div key={data+'any'}>
                <div id="comment-title">{data.comment_author}{data.comment_date}</div>
                <div id="comment-content">{data.comment_content}</div>
              </div>
            )
          })}
        </article>
        <CommentWrite></CommentWrite>
      </section> */}
    </>
  )
}