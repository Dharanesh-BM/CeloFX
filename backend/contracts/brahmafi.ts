import { BrahmaFi } from "brahmafi-sdk";

async function borrowStablecoin(amount: number) {
  const loan = await BrahmaFi.borrow("cUSD", amount);
  console.log("Loan approved:", loan);
  return loan;
}

export { borrowStablecoin };
