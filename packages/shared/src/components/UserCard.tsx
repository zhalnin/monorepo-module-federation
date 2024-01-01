
export const UserCard = ({username}:{username: string}) => {
    return (
        <div style={{border: '1px solid green',padding: 20}}>
            username: {username ?? 'user'}
            <div>password 123</div>
        </div>
    );
};