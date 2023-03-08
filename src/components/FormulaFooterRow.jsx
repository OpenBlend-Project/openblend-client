import React from 'react'

const FormulaFooterRow = ({ totalWeight }) => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className="text-end text-muted">{totalWeight && totalWeight} g</td>
      <td></td>
    </tr>
  )
}

export default FormulaFooterRow