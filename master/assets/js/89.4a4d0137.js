(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{764:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adr-019-encoding-standard-for-multisignatures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-019-encoding-standard-for-multisignatures"}},[e._v("#")]),e._v(" ADR 019: Encoding standard for Multisignatures")]),e._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),s("p",[e._v("06-08-2018: Minor updates")]),e._v(" "),s("p",[e._v("27-07-2018: Update draft to use amino encoding")]),e._v(" "),s("p",[e._v("11-07-2018: Initial Draft")]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("Multisignatures, or technically "),s("em",[e._v("Accountable Subgroup Multisignatures")]),e._v(" (ASM),\nare signature schemes which enable any subgroup of a set of signers to sign any message,\nand reveal to the verifier exactly who the signers were.\nThis allows for complex conditionals of when to validate a signature.")]),e._v(" "),s("p",[e._v("Suppose the set of signers is of size "),s("em",[e._v("n")]),e._v(".\nIf we validate a signature if any subgroup of size "),s("em",[e._v("k")]),e._v(" signs a message,\nthis becomes what is commonly reffered to as a "),s("em",[e._v("k of n multisig")]),e._v(" in Bitcoin.")]),e._v(" "),s("p",[e._v("This ADR specifies the encoding standard for general accountable subgroup multisignatures,\nk of n accountable subgroup multisignatures, and its weighted variant.")]),e._v(" "),s("p",[e._v("In the future, we can also allow for more complex conditionals on the accountable subgroup.")]),e._v(" "),s("h2",{attrs:{id:"proposed-solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proposed-solution"}},[e._v("#")]),e._v(" Proposed Solution")]),e._v(" "),s("h3",{attrs:{id:"new-structs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-structs"}},[e._v("#")]),e._v(" New structs")]),e._v(" "),s("p",[e._v("Every ASM will then have its own struct, implementing the crypto.Pubkey interface.")]),e._v(" "),s("p",[e._v("This ADR assumes that "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1957",target:"_blank",rel:"noopener noreferrer"}},[e._v("replacing crypto.Signature with []bytes"),s("OutboundLink")],1),e._v(" has been accepted.")]),e._v(" "),s("h4",{attrs:{id:"k-of-n-threshold-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-of-n-threshold-signature"}},[e._v("#")]),e._v(" K of N threshold signature")]),e._v(" "),s("p",[e._v("The pubkey is the following struct:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBUaHJlc2hvbGRNdWx0aVNpZ25hdHVyZVB1YktleSBzdHJ1Y3QgeyAvLyBLIG9mIE4gdGhyZXNob2xkIG11bHRpc2lnCglLICAgICAgIHVpbnQgICAgICAgICAgICAgICBganNvbjomcXVvdDt0aHJlc2hvbGQmcXVvdDtgCglQdWJrZXlzIFtdY3J5cHRvLlB1YmtleSAgICBganNvbjomcXVvdDtwdWJrZXlzJnF1b3Q7YAp9Cg=="}}),e._v(" "),s("p",[e._v("We will derive N from the length of pubkeys. (For spatial efficiency in encoding)")]),e._v(" "),s("p",[s("code",[e._v("Verify")]),e._v(" will expect an "),s("code",[e._v("[]byte")]),e._v(" encoded version of the Multisignature.\n(Multisignature is described in the next section)\nThe multisignature will be rejected if the bitmap has less than k indices,\nor if any signature at any of the k indices is not a valid signature from\nthe kth public key on the message.\n(If more than k signatures are included, all must be valid)")]),e._v(" "),s("p",[s("code",[e._v("Bytes")]),e._v(" will be the amino encoded version of the pubkey.")]),e._v(" "),s("p",[e._v("Address will be "),s("code",[e._v("Hash(amino_encoded_pubkey)")])]),e._v(" "),s("p",[e._v("The reason this doesn't use "),s("code",[e._v("log_8(n)")]),e._v(" bytes per signer is because that heavily optimizes for the case where a very small number of signers are required.\ne.g. for "),s("code",[e._v("n")]),e._v(" of size "),s("code",[e._v("24")]),e._v(", that would only be more space efficient for "),s("code",[e._v("k < 3")]),e._v(".\nThis seems less likely, and that it should not be the case optimized for.")]),e._v(" "),s("h4",{attrs:{id:"weighted-threshold-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weighted-threshold-signature"}},[e._v("#")]),e._v(" Weighted threshold signature")]),e._v(" "),s("p",[e._v("The pubkey is the following struct:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBXZWlnaHRlZFRocmVzaG9sZE11bHRpU2lnbmF0dXJlUHViS2V5IHN0cnVjdCB7CglXZWlnaHRzIFtddWludCAgICAgICAgICAgICBganNvbjomcXVvdDt3ZWlnaHRzJnF1b3Q7YAoJVGhyZXNob2xkIHVpbnQgICAgICAgICAgICAgYGpzb246JnF1b3Q7dGhyZXNob2xkJnF1b3Q7YAoJUHVia2V5cyBbXWNyeXB0by5QdWJrZXkgICAgYGpzb246JnF1b3Q7cHVia2V5cyZxdW90O2AKfQo="}}),e._v(" "),s("p",[e._v("Weights and Pubkeys must be of the same length.\nEverything else proceeds identically to the K of N multisig,\nexcept the multisig fails if the sum of the weights is less than the threshold.")]),e._v(" "),s("h4",{attrs:{id:"multisignature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multisignature"}},[e._v("#")]),e._v(" Multisignature")]),e._v(" "),s("p",[e._v("The inter-mediate phase of the signatures (as it accrues more signatures) will be the following struct:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBNdWx0aXNpZ25hdHVyZSBzdHJ1Y3QgewoJQml0QXJyYXkgICAgQ3J5cHRvQml0QXJyYXkgLy8gRG9jdW1lbnRlZCBsYXRlcgoJU2lncyAgICAgICAgW11bXWJ5dGUK"}}),e._v(" "),s("p",[e._v("It is important to recall that each private key will output a signature on the provided message itself.\nSo no signing algorithm ever outputs the multisignature.\nThe UI will take a signature, cast into a multisignature, and then keep adding\nnew signatures into it, and when done marshal into "),s("code",[e._v("[]byte")]),e._v(".\nThis will require the following helper methods:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBTaWdUb011bHRpc2lnKHNpZyBbXWJ5dGUsIG4gaW50KQpmdW5jIEdldEluZGV4KHBrIGNyeXB0by5QdWJrZXksIFtdY3J5cHRvLlB1YmtleSkKZnVuYyBBZGRTaWduYXR1cmUoc2lnIFNpZ25hdHVyZSwgaW5kZXggaW50LCBtdWx0aVNpZyAqTXVsdGlzaWduYXR1cmUpCg=="}}),e._v(" "),s("p",[e._v("The multisignature will be converted to an "),s("code",[e._v("[]byte")]),e._v(" using amino.MarshalBinaryBare. *")]),e._v(" "),s("h4",{attrs:{id:"bit-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bit-array"}},[e._v("#")]),e._v(" Bit Array")]),e._v(" "),s("p",[e._v("We would be using a new implementation of a bitarray. The struct it would be encoded/decoded from is")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBDcnlwdG9CaXRBcnJheSBzdHJ1Y3QgewoJRXh0cmFCaXRzU3RvcmVkICBieXRlICAgICAgYGpzb246JnF1b3Q7ZXh0cmFfYml0cyZxdW90O2AgLy8gVGhlIG51bWJlciBvZiBleHRyYSBiaXRzIGluIGVsZW1zLgoJRWxlbXMgICAgICAgICAgICBbXWJ5dGUgICAgYGpzb246JnF1b3Q7ZWxlbXMmcXVvdDtgCn0K"}}),e._v(" "),s("p",[e._v("The reason for not using the BitArray currently implemented in "),s("code",[e._v("libs/common/bit_array.go")]),e._v("\nis that it is less space efficient, due to a space / time trade-off.\nEvidence for this is outlined in "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2077",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("In the multisig, we will not be performing arithmetic operations,\nso there is no performance increase with the current implementation,\nand just loss of spatial efficiency.\nImplementing this new bit array with "),s("code",[e._v("[]byte")]),e._v(" "),s("em",[e._v("should")]),e._v(" be simple, as no\narithmetic operations between bit arrays are required, and save a couple of bytes.\n(Explained in that same issue)")]),e._v(" "),s("p",[e._v("When this bit array encoded, the number of elements is encoded due to amino.\nHowever we may be encoding a full byte for what we actually only need 1-7 bits for.\nWe store that difference in ExtraBitsStored.\nThis allows for us to have an unbounded number of signers, and is more space efficient than what is currently used in "),s("code",[e._v("libs/common")]),e._v(".\nAgain the implementation of this space saving feature is straight forward.")]),e._v(" "),s("h3",{attrs:{id:"encoding-the-structs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-the-structs"}},[e._v("#")]),e._v(" Encoding the structs")]),e._v(" "),s("p",[e._v("We will use straight forward amino encoding. This is chosen for ease of compatibility in other languages.")]),e._v(" "),s("h3",{attrs:{id:"future-points-of-discussion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-points-of-discussion"}},[e._v("#")]),e._v(" Future points of discussion")]),e._v(" "),s("p",[e._v("If desired, we can use ed25519 batch verification for all ed25519 keys.\nThis is a future point of discussion, but would be backwards compatible as this information won't need to be marshalled.\n(There may even be cofactor concerns without ristretto)\nAggregation of pubkeys / sigs in Schnorr sigs / BLS sigs is not backwards compatible, and would need to be a new ASM type.")]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("Proposed.")]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),s("ul",[s("li",[e._v("Supports multisignatures, in a way that won't require any special cases in our downstream verification code.")]),e._v(" "),s("li",[e._v("Easy to serialize / deserialize")]),e._v(" "),s("li",[e._v("Unbounded number of signers")])]),e._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),s("ul",[s("li",[e._v("Larger codebase, however this should reside in a subfolder of tendermint/crypto, as it provides no new interfaces. (Ref #https://github.com/tendermint/go-crypto/issues/136)")]),e._v(" "),s("li",[e._v("Space inefficient due to utilization of amino encoding")]),e._v(" "),s("li",[e._v("Suggested implementation requires a new struct for every ASM.")])]),e._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);