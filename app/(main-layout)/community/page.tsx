'use client';

import PostListToolbar from '@/components/page/community/PostListToolbar';
import PostListItem from '@/components/page/community/PostListItem';
// 정렬 순서 바

// 임시 유저 데이터
const User = {
  userId: 123,
  username: '권보령',
  profileCode: 123,
};

const Page = () => {
  return (
    <div>
      <h3 className='font-paperlogy text-[22px] font-normal'>커뮤니티</h3>

      <div className='my-2 border border-lime-400 p-2'>
        <PostListToolbar postCount={0} />
      </div>
      <div className='my-2 border border-lime-400 p-2'>
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
      </div>
    </div>
  );
};

export default Page;
