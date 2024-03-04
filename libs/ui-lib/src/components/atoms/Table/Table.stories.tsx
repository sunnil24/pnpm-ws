import type { Meta, StoryObj } from "@storybook/react";
import { TableProps } from "./Table";
import Table from "./index";

const meta = {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as Meta<TableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add your story variants here
export const Default: Story = {
  args: {
    columnDefs: [
      {
        headerName: "Trade Action",
        field: "tradeAction",
        sortable: false,
      },
      {
        headerName: "Ticker",
        field: "ticker",
        sortable: false,
      },
      {
        headerName: "Security Name",
        field: "securityName",
        sortable: false,
        maxWidth: 200,
      },
      {
        headerName: "Price",
        field: "price",
        sortable: false,
      },
      {
        headerName: "Current Weight",
        field: "currentWeight",
        sortable: false,
      },
      {
        headerName: "New Weight",
        field: "newWeight",
        sortable: false,
      },
      {
        headerName: "Delta Weight",
        field: "deltaWeight",
        sortable: false,
      },
      {
        headerName: "Price Limit",
        field: "priceLimit",
        sortable: false,
      },
      {
        headerName: "Volume Limit",
        field: "volumeLimit",
        sortable: false,
      },
      {
        headerName: "Cusip",
        field: "cusip",
        sortable: false,
      },
      {
        headerName: "Principal Net Amount",
        field: "principalNetAmount",
        sortable: false,
      },
      {
        headerName: "Interest Amount",
        field: "interestAmount",
        sortable: false,
      },
      {
        headerName: "Net Amount",
        field: "netAmount",
        sortable: false,
      },
      {
        headerName: "Yield",
        field: "actionYield",
        sortable: false,
      },
      {
        headerName: "Delivery Type",
        field: "deliveryType",
        sortable: false,
      },
      {
        headerName: "Factor",
        field: "factor",
        sortable: false,
      },
      {
        headerName: "Original Face",
        field: "originalFace",
        sortable: false,
      },
      {
        headerName: "Restrictions",
        field: "restrictions",
        sortable: false,
      },
      {
        headerName: "Special Instructions",
        field: "specialInstructions",
        sortable: false,
      },
    ],
    rowData: [
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "Xxsdadsadadsadsaasdasdasdasdasdsad",
        price: 53.815,
        currentWeight: 0.9,
        newWeight: 1.05,
        deltaWeight: 0.15,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 0.9,
        newWeight: 1.05,
        deltaWeight: 0.15,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 2.1,
        newWeight: 1.5,
        deltaWeight: -0.6,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 2.1,
        newWeight: 1.5,
        deltaWeight: -0.6,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 2.1,
        newWeight: 1.75,
        deltaWeight: -0.35,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 2.1,
        newWeight: 1.5,
        deltaWeight: -0.6,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 2.1,
        newWeight: 1.5,
        deltaWeight: -0.6,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
      {
        tradeAction: "SELL",
        ticker: "Xxx",
        securityName: "xx",
        price: 53.815,
        currentWeight: 0.9,
        newWeight: 1.05,
        deltaWeight: 0.15,
        priceLimit: 50.01,
        volumeLimit: 100,
        restrictions: "None",
        specialInstructions: "After 12pm",
        cusip: "xx",
        principalNetAmount: 10,
        interestAmount: 10,
        netAmount: 10,
        actionYield: 10,
        deliveryType: "xx",
        factor: "xx",
        originalFace: "xx",
      },
    ],
  },
};
