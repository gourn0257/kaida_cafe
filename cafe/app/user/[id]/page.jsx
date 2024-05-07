import { mysql2 } from "@/library/db"
import Link from "next/link";

export default async function User(props) {
  // const user_resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`user/${props.params.id}`, { cache: 'no-store' });
  // const user = await user_resp.json();
  // const board_resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'board', { cache: 'no-store'} );
  // const board = await board_resp.json();
  // 모든 것을 SELECT * 할 필요는 없다. 몇 가지만 가져와야겠다.
  // const board = await mysql2(`SELECT * FROM boards WHERE id = ?`, [props.params.id]);
  const user = await mysql2(`SELECT nickname FROM users WHERE id = ?`, [props.params.id]);
  const user_board = await mysql2(`SELECT id, title FROM boards WHERE author_id = ?`, [props.params.id]);
  console.log(user)
  console.log(user_board)
  return(
    <>
      <header id="user-profile">
        <div id="user-profile-img"></div>
        <h1>{user.nickname}</h1>
      </header>
      <section>
        <h2>게시글 목록</h2>
        <ul>
          {user_board.map((data)=>{
            return(
              <li key={data+'any'}>
                <article><Link href={"/board/writing/"+data.id} legacyBehavior><a>{data.title}</a></Link></article>
              </li>
            )
            })}
        </ul>
      </section>
    </>
  )
}