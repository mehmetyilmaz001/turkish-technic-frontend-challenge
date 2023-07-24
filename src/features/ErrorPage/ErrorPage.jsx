import MainLayout from "../../layouts/MainLayout/MainLayout";
import Alert, { ALERT_TYPE } from "../../components/Alert/Alert";
import history from "../../utils/history";
import { PATHS } from "../../constants";

export default function ErrorPage() {
  return (
    <MainLayout>
      <Alert type={ALERT_TYPE.FAIL} message="404 Sayfa Bulunamadı!" buttonProps={{
        onClick: () => history.push(PATHS.QUERY), 
        label: "Başa Dön",
      }} />
    </MainLayout>
  );
}