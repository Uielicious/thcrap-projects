{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx0EDBB",
			"code": "9090",
			"expected": "75 06"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx0EDB5",
			"code": "\
39 1D 20574A00 \
74 06 \
",
			"expected": "\
39 1D 3C574A00 \
75 06 \
"
		}
	}
}