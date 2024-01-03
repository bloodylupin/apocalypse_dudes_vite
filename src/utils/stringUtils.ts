export function formatAccount(account: string) {
  return account.slice(0, 5) + "..." + account.slice(-3);
}

export function formatBalance(balance: string) {
  return balance.includes(".")
    ? balance.split(".")[0] + "." + balance.split(".")[1].substring(0, 2)
    : balance;
}
