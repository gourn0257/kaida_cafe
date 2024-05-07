import { mysql2 } from "@/library/db";
import Link from "next/link"


export default async function Board(props) {
  // const db_board = require('/public/db-board.json');
  /* const board_resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'board', {cache: 'no-store'});
  const user_resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'user', {cache: 'no-store'});
  const board = await board_resp.json();
  const user = await user_resp.json();
  */
  // let id_url = "";
  const page = props.searchParams?.page ? 20 * props.searchParams.page : 0;
  const board = await mysql2(`SELECT * FROM boards ORDER BY id DESC LIMIT 20 OFFSET ${page}`);
  const page_num1 = await mysql2(`SELECT (SELECT COUNT(*) AS board_len FROM boards) / 20 AS page_num`);
  const page_num2 = await mysql2(`SELECT CEILING(${page_num1[0].page_num}) AS page_num`);
  const array = Array.from({length: page_num2[0].page_num}, (v ,i)=>i++);
  // const board = {}
  // console.log('board_len:', count_board[0].board_len)
  console.log('board_len:', array)

  return(
    <>
      <div id="board">
        {/* 버튼 */}
        {/* <div id="btn-write"><Link href="/write" legacyBehavior><a>글쓰기</a></Link></div> */}
        
        {/* 게시판 테이블 */}
        <div id="board-table">
          <table>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
              <th>조회</th>
              <th>추천</th>
            </tr>
            {/*
              board.length > 0 ? (
                board.map((board_data)=>{
                  return(
                    <tr key={board_data+'any'}>
                      <td>{board_data.id}</td>
                      <td><Link href={"/board/writing/"+board_data.id} legacyBehavior><a>{board_data.board_title}</a></Link></td>
                      {
                        user.map((user_data)=>{
                          if(board_data.board_author == user_data.nickname) {
                            id_url = user_data.id;
                          // }else if (board_data.board_author != user_data.nickname){
                          //   id_url = '/';
                          }
                        })
                      }
                      <td><Link href={"/user/"+id_url} legacyBehavior><a>{board_data.board_author}</a></Link></td>
                      <td>{board_data.board_date}</td>
                      <td>{board_data.board_watch}</td>
                      <td>{board_data.board_recommend}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="6">게시판에 글이 없습니다.</td>
                </tr>
              )*/

              
              board.length > 0 ? (
                board.map(async(board_data)=>{
                  const board_id = board_data.id;
                  const board_title = board_data.title;
                  const board_author_id = board_data.author_id;
                  const board_name = board_data.author_name;
                  const user_id = await mysql2('SELECT id FROM users WHERE id = ?', [board_author_id]);
                  // console.log(user_id[0].id)
                  // const board_date_string = String(board_data.date);
                  const board_date_time = board_data.date.getTime()
                  const board_date_object = new Date(board_date_time+(9 * 60 * 60 * 1000));
                  const board_date = board_date_object.toISOString().slice(0, 10).replace("T", " ");
                  // console.log('원데이터', board_data.date)
                  // // console.log('글자', board_date_string)
                  // console.log('시간', board_date_time)
                  // console.log('ㄱㄱ', board_date_object)
                  // console.log('결과', board_date)
                  const board_watch = board_data.watch;
                  const board_recommend = board_data.recommend;
                  // console.log(board_data)
                  return(
                    <tr key={board_id+'any'}>
                      <td>{board_id}</td>
                      <td><Link href={"/board/writing/"+board_id} legacyBehavior><a>{board_title}</a></Link></td>
                      {/* <td><Link href={user_id[0]?.id ? "/user/"+ user_id[0]?.id : ""} legacyBehavior><a>{board_name}</a></Link></td> */}
                      <td>
                        {user_id[0]?.id ? 
                        <Link href={"/user/"+ user_id[0].id} legacyBehavior><a>{board_name}</a></Link>
                        : board_name}
                      </td>
                      <td>{board_date}</td>
                      <td>{board_watch}</td>
                      <td>{board_recommend}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="6">게시판에 글이 없습니다.</td>
                </tr>
              )
              
              /*board.length > 0 ? (
                board.map(({board_data})=>{
                  return(
                    <tr key={board_data.id+'any'}>
                      <td>{board_data.id}</td>
                      <td><Link href={"/board/writing/"+board_data.id} legacyBehavior><a>{board_data.title}</a></Link></td>
                      <td><Link href={"/user/"+id_url} legacyBehavior><a>{board_data.author}</a></Link></td>
                      <td>{board_data.date}</td>
                      <td>{board_data.watch}</td>
                      <td>{board_data.recommend}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="6">게시판에 글이 없습니다.</td>
                </tr>
              )*/
            }

            
          </table>
          <p id="page_num">
            {array.map((data)=>{
              return(<a href={`?page=${data}`}>{data+1}</a>)
            })}
          </p>
        </div>
      </div>
    </>
  )
}