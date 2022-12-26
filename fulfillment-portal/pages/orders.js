import React from "react"
import AddProductModal from "../components/UI/Modal/AddProductModal"
import DenyOrderModal from "../components/UI/Modal/DenyOrderModal"
import OrderDetailsModal from "../components/OrdersPage/OrderDetailsModal"

export default function orders() {
  return (
    <div>
      {/* <AddProductModal /> */}
      {/* <DenyOrderModal /> */}
      <OrderDetailsModal />
    </div>
  )
}
