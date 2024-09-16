{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx44921",
			"code": "EB 11",
			"expected": "74 11"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx4491A",
			"code": "\
83 3D 00CD4C00 00  \
75 11 \
",
			"expected": "\
83 3D 04CD4C00 00  \
74 11 \
"
		}
	}
}