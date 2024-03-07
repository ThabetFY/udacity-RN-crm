import useAppDispatch from "@/common/hooks/useAppDispatch";
import { logout } from "./authSlice";
import { Button } from "@/common/components/Button";

/* Render a button that triggers a login action when pressed */

export default () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      label="Logout"
      onPress={() => {
        dispatch(logout({}));
      }}
    />
  );
};
