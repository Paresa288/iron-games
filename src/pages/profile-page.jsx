import { PageLayout } from "../components/layouts";
import { useAuth } from "../contexts/auth-context";
import { WatchList } from "../components/games";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <PageLayout>
      <div className="row">
        <div  className="col-3">
          <div className="bg-secondary p-3 inset-box-shadow gap-3">
            <div className="mb-2 text-center">
              <i className="fa fa-user-circle-o fs-1" aria-hidden="true"></i>
            </div>
            <div className="mb-2 text-center">{user?.name}</div>
            <div className="mb-2 text-center">{user?.email}</div>
          </div>
        </div>
        <div className="col">
          <div className=" bg-secondary inset-box-shadow p-3">
            <h3>WatchList</h3>
            <WatchList games={user?.watchedGames} /> 
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ProfilePage;