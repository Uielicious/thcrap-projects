{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx10D8D",
			"code": "9090",
			"expected": "75 06"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx10D87",
			"code": "\
39 1D A80C4B00 \
74 06 \
",
			"expected": "\
39 1DC40C4B00 \
75 06 \
"
		}
	}
}