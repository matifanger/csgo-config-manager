var SIGN =`##########################################################
##                                                          
##        GENERATED BY CSGO CONFIG OPTIMIZER V1.0.0         
##                                                          
##########################################################`

const OPTIMUM_COMMANDS = [
    'rate "437500"',
    'violence_hblood "0"',
    'snd_menumusic_volume "0"',
    'snd_mix_async "1"',
    'snd_mixahead "0.025"',
    'cl_lagcompensation "1"',
    'cl_predict "1"',
    'cl_predictweapons "1"',
    'cl_interp "0"',
    'cl_interp_ratio "1"',
    'cl_autohelp "0"',
    'cl_disablehtmlmotd "1"',
    'cl_showhelp "0"',
    'cl_forcepreload "0"',
    'r_dynamic "0"',
    'joystick "0"',
    'cl_disablefreezecam "1"',
    'fps_max "0"',
    'fps_max_menu "0"',
    'r_drawtracers_firstperson "0"',
    'r_eyegloss "0"',
    'r_eyemove "0"',
    'r_eyeshift_x "0"',
    'r_eyeshift_y "0"',
    'r_eyeshift_z "0"',
    'r_eyesize "0"',
    'mat_queue_mode "2"'
]

const regex = {
    com: '\B/',
    space: ' {2}',
    numeral: '\B#',
    jumpline: '\newline',
}

import cfg from "./engine-config.js"
import opt from "./optimal-commands"
var config_container = cfg
var optimal_commands = opt
var unknown_commands = []

function compile_config() {
    return new Promise((resolve, reject) => {
        var completed_config = ``
        completed_config = completed_config + SIGN
        
        config_container.forEach( obj => {
            completed_config = completed_config + '\n\n# ' + obj.value.toUpperCase()
            
            obj.data.forEach( item => {
                completed_config = completed_config + '\n' + item
            })
        })

        completed_config = completed_config + '\n\n#  OPTIMIZED'

        optimal_commands.forEach( item => {
            completed_config = completed_config + '\n' + `${item.command} "${item.value}"`
        })

        completed_config = completed_config + '\n clear \n\n'

        completed_config = completed_config + SIGN

        resolve(completed_config)
    })
}

function check_line(line) {
    let found = false
    // debugger
    config_container.every((obj) => {
        if (obj.matching.some( v => line.includes(v) )) {
            obj.data.push(line)
            found = true
            return true
        }
        return true
    })
    if (!found) {
        unknown_commands.push(line)
        return true
    }
}


function fill_config_container(file) {
    return new Promise((resolve, reject) => {
        const allLines = file.split(/\r\n|\n/)
        allLines.forEach((line) => {
            check_line(line)
        })
        resolve(config_container)
    })
}


export default function edit_config(file) {
    return new Promise((resolve, reject) => {
        fill_config_container(file).then((res) => {
            compile_config().then((res) => {
                resolve(res)
            })
        })
    })

}
