import { mysql2 } from "@/library/db";
import { SendRoute } from "../router";

export default async function Write(props) {
  // async (e)=>{
  //   e.preventDefault();
  //   const board_board = e.target.board_board.value;
  //   const board_title = e.target.board_title.value;
  //   const board_content = e.target.board_content.value;
  //   const board_author = e.target.board_user_id.value;
  //   /* let today = new Date();
  //   let year = today.getFullYear()-2000; // 년도
  //   let month = today.getMonth() + 1;  // 월
  //   let date = today.getDate();  // 날짜
  //   if (month < 10) month = '0' + month
  //   if (date < 10) date = '0' + date
  //   const board_date = year + '-' + month + '-' + date;
  //   */
    
  //   // const options = {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify({board_board, board_title, board_content, board_author})
  //   // }
  //   // fetch(process.env.NEXT_PUBLIC_API_URL+'board', options)
  //   //   .then(res=>res.json())
  //   //   .then(result=>{
  //   //     // const lastnumber = result.border_number;
  //   //     // router.push(`/board/${lastnumber}`);
  //   //     router.push('/board');
  //   //     router.refresh();
  //   //   })
  //   await mysql2(`INSERT INTO boards (board, title, content, author_id, date) VALUES (?, ?, ?, ?, NOW());`,
  //   [board_board, board_title, board_content, board_author]);
  const board = props.searchParams.board_board;
  const title = props.searchParams.board_title;
  const content = props.searchParams.board_content;
  const author_name = props.searchParams.board_user_name;
  const author_id = props.searchParams.board_user_id;
  const password = props.searchParams.board_user_password;
  console.log(props);
  // SendRoute()
  try {
    // 로그인을 했는지에 따라 설정해야 될 것 같은 느낌이다
    author_id === undefined ?
      await mysql2(
        `INSERT INTO boards (board, title, content, author_name, password)
        VALUES (?, ?, ?, ?, ?)`, 
        [board, title, content, author_name, password]
      )
    :
      await mysql2(
        `INSERT INTO boards (board, title, content, author_name, author_id, password)
        VALUES (?, ?, ?, ?, ?, ?)`, 
        [board, title, content, author_name, author_id, password]
      );
      // await mysql2(
      //   `INSERT INTO boards (board, title, content, author_name, author_id, password)
      //   VALUES (?, ?, ?, (SELECT nickname FROM users WHERE id = ?), ?, ?)`, 
      //   [board, title, content, author_name, author_id, author_id, password]
      // );
    // res.status(201).json({ message: '글쓰기 성공!' });
  } catch (error) {
    console.log('글쓰기 오류: ', error);
    // res.status(500).json({ message: '글쓰기 실패...' });
  }
}