{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx19306",
			"code": "EB 09",
			"expected": "74 09"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx192FF",
			"code": "\
83 3D B8574A00 00  \
75 09 \
",
			"expected": "\
83 3D B8574A00 00  \
74 09 \
"
		}
	}
}