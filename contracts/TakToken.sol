// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TakToken is ERC20 {  
   constructor(uint256 initialSupply, string memory name, string memory symbol) ERC20(name, symbol){
       _mint(msg.sender, initialSupply);
   }
}