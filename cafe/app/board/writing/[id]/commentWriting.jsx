import { mysql2 } from "@/library/db"
import CommentWrite from "../../../write/commentWrite/commentWrite";

export default async function CommentWriting(props) {
  // const board = await mysql2()
  const comment = await mysql2(`SELECT * FROM comments WHERE board_id = ?`, [props.props]);
  // console.log('ㅎㅎ', props)
  return(
    <>
      <section id="comment">
        <h2>댓글창</h2>
        <article>
          {comment.map((data)=>{            
            const comment_date_time = data.date.getTime()
            const comment_date_object = new Date(comment_date_time+(9 * 60 * 60 * 1000));
            const comment_date = comment_date_object.toISOString().slice(0, 19).replace("T", " ");
            return(
              <ul key={data+'any'}><div>
                <li><div id="comment-title">{data.author_name}{comment_date}</div></li>
                <li><div id="comment-content">{data.content}</div></li>
              </div></ul>
            )
          })}
        </article>
        <CommentWrite props={props.props}></CommentWrite>
      </section>
    </>
  )
}