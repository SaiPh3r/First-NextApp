export default function UserProfile({params}:any){
    return(
        <div>
            <h1 className="text-4xl text-center">{params.id}'s Profile</h1>
        </div>
    )
}