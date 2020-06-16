filterInput = document.querySelector('.filter-input')
filterInput.value = "is:dupelower is:unlocked -is:masterwork -is:exotic -tag:favorite -tag:keep"
filterInput.dispatchEvent(new Event('input', {    bubbles: true, cancelable: true}))

function moveToVault(row) {
  Array.from(
    document.querySelectorAll(`div.store-row:nth-child(${row}) > .store-cell:nth-child(1) > .sub-bucket:nth-child(2) .item`)
  ).forEach(x => {
    x.click()
    document.querySelector('[title="Vault"]').click()
  })
}

function moveVaultToCharacter(row) {
  Array.from(
    document.querySelectorAll(`div.store-row:nth-child(${row}) > .store-cell.vault > .sub-bucket.unequipped .item`)
  ).filter(x => window.getComputedStyle(x).getPropertyValue('opacity') == '1')
  .slice(0, 9)
  .forEach(x => {
    x.click()
    document.querySelector('.item-details [title]:nth-child(2) span').click()
  })
}

for (i = 7; i <= 9; i++) {
  moveToVault(i)
  moveVaultToCharacter(i)
}

for (i = 12; i <= 16; i++) {
  moveToVault(i)
  moveVaultToCharacter(i)
}
