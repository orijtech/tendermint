(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{763:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"indexing-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#indexing-transactions"}},[e._v("#")]),e._v(" Indexing Transactions")]),e._v(" "),n("p",[e._v("Tendermint allows you to index transactions and blocks and later query or\nsubscribe to their results. Transactions are indexed by "),n("code",[e._v("TxResult.Events")]),e._v(" and\nblocks are indexed by "),n("code",[e._v("Response(Begin|End)Block.Events")]),e._v(". However, transactions\nare also indexed by a primary key which includes the transaction hash and maps\nto and stores the corresponding "),n("code",[e._v("TxResult")]),e._v(". Blocks are indexed by a primary key\nwhich includes the block height and maps to and stores the block height, i.e.\nthe block itself is never stored.")]),e._v(" "),n("p",[e._v("Each event contains a type and a list of attributes, which are key-value pairs\ndenoting something about what happened during the method's execution. For more\ndetails on "),n("code",[e._v("Events")]),e._v(", see the\n"),n("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/abci/abci.md#events",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI"),n("OutboundLink")],1),e._v("\ndocumentation.")]),e._v(" "),n("p",[e._v("An "),n("code",[e._v("Event")]),e._v(" has a composite key associated with it. A "),n("code",[e._v("compositeKey")]),e._v(" is\nconstructed by its type and key separated by a dot.")]),e._v(" "),n("p",[e._v("For example:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7amFjayZxdW90OzogWwogICZxdW90O2FjY291bnQubnVtYmVyJnF1b3Q7OiAxMDAKXQo="}}),e._v(" "),n("p",[e._v("would be equal to the composite key of "),n("code",[e._v("jack.account.number")]),e._v(".")]),e._v(" "),n("p",[e._v("Let's take a look at the "),n("code",[e._v("[tx_index]")]),e._v(" config section:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyMjIyMgdHJhbnNhY3Rpb25zIGluZGV4ZXIgY29uZmlndXJhdGlvbiBvcHRpb25zICMjIyMjClt0eF9pbmRleF0KCiMgV2hhdCBpbmRleGVyIHRvIHVzZSBmb3IgdHJhbnNhY3Rpb25zCiMKIyBPcHRpb25zOgojICAgMSkgJnF1b3Q7bnVsbCZxdW90OwojICAgMikgJnF1b3Q7a3YmcXVvdDsgKGRlZmF1bHQpIC0gdGhlIHNpbXBsZXN0IHBvc3NpYmxlIGluZGV4ZXIsIGJhY2tlZCBieSBrZXktdmFsdWUgc3RvcmFnZSAoZGVmYXVsdHMgdG8gbGV2ZWxEQjsgc2VlIERCQmFja2VuZCkuCmluZGV4ZXIgPSAmcXVvdDtrdiZxdW90Owo="}}),e._v(" "),n("p",[e._v("By default, Tendermint will index all transactions by their respective hashes\nand height and blocks by their height.")]),e._v(" "),n("p",[e._v("You can turn off indexing completely by setting "),n("code",[e._v("tx_index")]),e._v(" to "),n("code",[e._v("null")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"default-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-indexes"}},[e._v("#")]),e._v(" Default Indexes")]),e._v(" "),n("p",[e._v("The Tendermint tx and block event indexer indexes a few select reserved events\nby default.")]),e._v(" "),n("h3",{attrs:{id:"transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),n("p",[e._v("The following indexes are indexed by default:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("tx.height")])]),e._v(" "),n("li",[n("code",[e._v("tx.hash")])])]),e._v(" "),n("h3",{attrs:{id:"blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),n("p",[e._v("The following indexes are indexed by default:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("block.height")])])]),e._v(" "),n("h2",{attrs:{id:"adding-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-events"}},[e._v("#")]),e._v(" Adding Events")]),e._v(" "),n("p",[e._v("Applications are free to define which events to index. Tendermint does not\nexpose functionality to define which events to index and which to ignore. In\nyour application's "),n("code",[e._v("DeliverTx")]),e._v(" method, add the "),n("code",[e._v("Events")]),e._v(' field with pairs of\nUTF-8 encoded strings (e.g. "transfer.sender": "Bob", "transfer.recipient":\n"Alice", "transfer.balance": "100").')]),e._v(" "),n("p",[e._v("Example:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeChyZXEgdHlwZXMuUmVxdWVzdERlbGl2ZXJUeCkgdHlwZXMuUmVzdWx0IHsKICAgIC8vLi4uCiAgICBldmVudHMgOj0gW11hYmNpLkV2ZW50ewogICAgICAgIHsKICAgICAgICAgICAgVHlwZTogJnF1b3Q7dHJhbnNmZXImcXVvdDssCiAgICAgICAgICAgIEF0dHJpYnV0ZXM6IFtdYWJjaS5FdmVudEF0dHJpYnV0ZXsKICAgICAgICAgICAgICAgIHtLZXk6IFtdYnl0ZSgmcXVvdDtzZW5kZXImcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90O0JvYiZxdW90OyksIEluZGV4OiB0cnVlfSwKICAgICAgICAgICAgICAgIHtLZXk6IFtdYnl0ZSgmcXVvdDtyZWNpcGllbnQmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90O0FsaWNlJnF1b3Q7KSwgSW5kZXg6IHRydWV9LAogICAgICAgICAgICAgICAge0tleTogW11ieXRlKCZxdW90O2JhbGFuY2UmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90OzEwMCZxdW90OyksIEluZGV4OiB0cnVlfSwKICAgICAgICAgICAgICAgIHtLZXk6IFtdYnl0ZSgmcXVvdDtub3RlJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDtub3RoaW5nJnF1b3Q7KSwgSW5kZXg6IHRydWV9LAogICAgICAgICAgICB9LAogICAgICAgIH0sCiAgICB9CiAgICByZXR1cm4gdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHh7Q29kZTogY29kZS5Db2RlVHlwZU9LLCBFdmVudHM6IGV2ZW50c30KfQo="}}),e._v(" "),n("p",[e._v("If the indexer is not "),n("code",[e._v("null")]),e._v(", the transaction will be indexed. Each event is\nindexed using a composite key in the form of "),n("code",[e._v("{eventType}.{eventAttribute}={eventValue}")]),e._v(",\ne.g. "),n("code",[e._v("transfer.sender=bob")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"querying-transactions-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#querying-transactions-events"}},[e._v("#")]),e._v(" Querying Transactions Events")]),e._v(" "),n("p",[e._v("You can query for a paginated set of transaction by their events by calling the\n"),n("code",[e._v("/tx_search")]),e._v(" RPC endpoint:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAmcXVvdDtsb2NhbGhvc3Q6MjY2NTcvdHhfc2VhcmNoP3F1ZXJ5PVwmcXVvdDttZXNzYWdlLnNlbmRlcj0nY29zbW9zMS4uLidcJnF1b3Q7JmFtcDtwcm92ZT10cnVlJnF1b3Q7Cg=="}}),e._v(" "),n("p",[e._v("Check out "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Info/tx_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),n("OutboundLink")],1),e._v("\nfor more information on query syntax and other options.")]),e._v(" "),n("h2",{attrs:{id:"subscribing-to-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-transactions"}},[e._v("#")]),e._v(" Subscribing to Transactions")]),e._v(" "),n("p",[e._v("Clients can subscribe to transactions with the given tags via WebSocket by providing\na query to "),n("code",[e._v("/subscribe")]),e._v(" RPC endpoint.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3N1YnNjcmliZSZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDttZXNzYWdlLnNlbmRlcj0nY29zbW9zMS4uLicmcXVvdDsKICB9Cn0K"}}),e._v(" "),n("p",[e._v("Check out "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),n("OutboundLink")],1),e._v(" for more information\non query syntax and other options.")]),e._v(" "),n("h2",{attrs:{id:"querying-blocks-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#querying-blocks-events"}},[e._v("#")]),e._v(" Querying Blocks Events")]),e._v(" "),n("p",[e._v("You can query for a paginated set of blocks by their events by calling the\n"),n("code",[e._v("/block_search")]),e._v(" RPC endpoint:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAmcXVvdDtsb2NhbGhvc3Q6MjY2NTcvYmxvY2tfc2VhcmNoP3F1ZXJ5PVwmcXVvdDtibG9jay5oZWlnaHQgJmd0OyAxMCBBTkQgdmFsX3NldC5udW1fY2hhbmdlZCAmZ3Q7IDBcJnF1b3Q7JnF1b3Q7Cg=="}}),e._v(" "),n("p",[e._v("Check out "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Info/block_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),n("OutboundLink")],1),e._v("\nfor more information on query syntax and other options.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);