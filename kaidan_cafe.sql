DROP DATABASE kaidan_cafe;
CREATE DATABASE kaidan_cafe;
USE kaidan_cafe;

CREATE TABLE boards (
	id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    board ENUM('자유', '창작', '리뷰', '연재기원', '공지') NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    author_name VARCHAR(20) NOT NULL,
    author_id SMALLINT UNSIGNED,
    password VARCHAR(15),
    date DATETIME NOT NULL DEFAULT NOW(),
    watch SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    recommend SMALLINT UNSIGNED NOT NULL DEFAULT 0
);
CREATE TABLE users (
	id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nickname VARCHAR(20) NOT NULL,
    password VARCHAR(15) NOT NULL
    -- writing SMALLINT UNSIGNED,
    -- writing JSON,
    -- FOREIGN KEY (writing) REFERENCES boards (id)
);
ALTER TABLE boards ADD FOREIGN KEY (author_id) REFERENCES users(id);
CREATE TABLE comments(
	id smallint unsigned AUTO_INCREMENT PRIMARY KEY, 
	board_id SMALLINT UNSIGNED NOT NULL,
	content TEXT NOT NULL,
    author_name VARCHAR(20) NOT NULL,
    author_id SMALLINT UNSIGNED,
    password VARCHAR(15),
    date DATETIME NOT NULL DEFAULT NOW(),
	FOREIGN KEY (board_id) REFERENCES boards (id)
);

-- INSERT INTO users (nickname, password) VALUES ('', '');
INSERT INTO users (nickname, password) VALUES ('아아존', '025712');
INSERT INTO users (nickname, password) VALUES ('gourn', '1118');
INSERT INTO users (nickname, password) VALUES ('오직선아', '10313');
INSERT INTO users (nickname, password) VALUES ('["test1", "test2"]', 'test');

-- INSERT INTO boards (board, title, content, author_id) VALUES ('', '', '', );
INSERT INTO boards (board, title, content, author_name, author_id, date, watch, recommend)
  VALUES ('공지', '안녕하세요, 운영자 아아존입니다.', '행복하세요', (SELECT nickname FROM users WHERE id = 1), 1, '2024-01-21 00:00:00', 25712, 1118);
-- UPDATE users SET writing = JSON_ARRAY_APPEND(writing, '$', 'new_value') WHERE id = 1;
-- UPDATE users SET writing = (SELECT id FROM boards WHERE author_id = '1') WHERE id = '1';
-- INSERT INTO users (writing) VALUES ((SELECT id FROM boards WHERE author_id = '1'));
INSERT INTO boards (board, title, content, author_name, author_id, date, watch, recommend)
  VALUES ('공지', '안녕하세요, 운영자 아아존입니다.', '행복하세요', (SELECT nickname FROM users WHERE id = 1), 1, NOW(), 25712, 1118);
-- UPDATE users SET writing = (SELECT id FROM boards WHERE author_id = '1') WHERE id = '1';
-- INSERT INTO users (writing) VALUE ((SELECT id FROM boards WHERE author_id = '1'));
-- UPDATE users SET writing = (SELECT GROUP_CONCAT(id SEPARATOR ', ') FROM boards WHERE author_id = 1) WHERE id = 1;
INSERT INTO boards (board, title, content, author_name, author_id, date, watch, recommend)
  VALUES ('자유', '※ 스포일러 포함을 꼭 체크하십시오 ※', '작은 괴담인줄 알았는데 작중 중요한 단서와 거대한 이야기가 내포된 괴담 3개, 아니 4개, 아니 5개가 있다.\n\n포린세스 막내 다솜이에게서 의뢰가 들어와 부원들과 같이 영상을 돌리며 문제를 해결하는 것 같았던 \'영상괴담\'\n\n낙성고 전체가 데스게임이 된 무대에서 가장 완벽한 버전의 이준이 활약하는 이야기처럼 보였던 \'귀신게임\'\n\n낙성고 운동장에 괴담 동아리가 모여 그냥 각자 능력을 시험할 줄 알았던 \'능력에 관한 기묘한 이야기\'\n\n클로버 백화점에서 벌어진 3건의 사건 파일을 파헤치는 진희×박강운 케미가 돋보인 편이었던 \'사회실험\' & \'몰래카메라\' 괴담\n\n오직재미의 새로운 연출과 함께 독자적으로 조력자 해커의 의뢰로 괴담을 해결하는 것처럼 보였던 \'방탈출게임\'\n\n디스맨이랑 도플준 에피소드는 아무도 안 죽었기에 일단 제외한다.\n\n', (SELECT nickname FROM users WHERE id = 1), 1, NOW(), 0, 0);
INSERT INTO boards (board, title, content, author_name, author_id, watch, recommend)
  SELECT '연재기원', '작가님 건강하세요', '진짜루', nickname, 3, 25712, 1118
  FROM users
  WHERE id = 3;

-- INSERT INTO comments (id, board_id, content, author_name, author_id, password) VALUES (, , '', '', , '');
-- INSERT INTO comments (id, board_id, content, author_name, author_id)
--  VALUES (1, 3, '', (SELECT nickname FROM users WHERE id = 1), 1);






SElECT * FROM users;
SELECT * FROM boards;