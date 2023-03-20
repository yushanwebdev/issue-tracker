import { useQuery } from "react-query";

export function useUserData(userID) {
  const usersData = useQuery(["users", userID], () =>
    fetch(`/api/users/${userID}`).then((res) => res.json())
  );

  return usersData;
}
