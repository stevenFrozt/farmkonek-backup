import MainLayout from "../components/layout/MainLayout"
import Banner from "../components/UI/Modal/Banner"
import SummaryCard from "../components/UI/Cards/SummaryCard"
import Button from "../components/UI/Button/Button"
export default function Home() {
  return (
    <div>
      <MainLayout>
        <Banner />
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 my-4 w-10/12 items-center px-4 lg:flex ">
          <SummaryCard label="QUEUE ORDERS " color={"yellow"} />
          <SummaryCard label="ACCEPTED ORDERS" />
          <SummaryCard label="DENIED ORDERS" color={"red"} />
        </div>
        {/* OVERVIEW AND NOTIFICATION */}
        <div className="my-6 px-4">
          <div className="flex gap-4">
            <Button>Orders Overview</Button>
            <Button variant="light" color="gray">
              Notifications
            </Button>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}
