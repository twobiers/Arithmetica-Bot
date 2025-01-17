export default {
    help: {
        desc: "Show an overview of commands.",
        translations: {
            de: "Zeig eine Übersicht aller Befehle.",
            fr: "Afficher un aperçu des commandes.",
            ru: "Показать обзор команд.",
            ja: "コマンドの概要を表示します。",
            "es-ES": "Muestra una descripción general de los comandos.",
        },
    },
    info: {
        desc: "Show information about this bot.",
        translations: {
            de: "Zeig Informationen über diesen Bot.",
            fr: "Afficher des informations sur ce bot.",
            ru: "Показать информацию об этом боте.",
            ja: "このボットに関する情報を表示します。",
            "es-ES": "Muestra información sobre este bot.",
        },
    },
    stats: {
        desc: "View your stats or the stats of another user.",
        translations: {
            de: "Zeige deine Statistiken oder die eines anderen Benutzers.",
            fr: "Afficher vos statistiques ou celles d'un autre utilisateur.",
            ru: "Просмотреть свою статистику или статистику другого пользователя.",
            ja: "あなたの統計情報を表示するか、他のユーザーの統計情報を表示します。",
            "es-ES": "Ver tus estadísticas o las estadísticas de otro usuario.",
        },
        options: {
            user: {
                desc: "The user to show stats for",
                translations: {
                    de: "Der Benutzer, dessen Statistiken angezeigt werden sollen",
                    fr: "L'utilisateur dont les statistiques doivent être affichées",
                    ru: "Пользователь, для которого нужно показать статистику",
                    ja: "統計情報を表示するユーザー",
                    "es-ES": "El usuario para mostrar estadísticas",
                },
            },
        },
    },
    top: {
        desc: "Show the top 10 users.",
        translations: {
            de: "Zeige die Top 10 Benutzer.",
            fr: "Afficher les 10 meilleurs utilisateurs.",
            ru: "Показать топ-10 пользователей.",
            ja: "トップ10のユーザーを表示します。",
            "es-ES": "Muestra los 10 mejores usuarios.",
        },
        options: {
            sort: {
                desc: "Sort by",
                translations: {
                    de: "Sortiere nach",
                    fr: "Trier par",
                    ru: "Сортировать по",
                    ja: "並べ替え",
                    "es-ES": "Ordenar por",
                },
                choices: {
                    wins: {
                        desc: "Correct counts",
                        translations: {
                            de: "Richtige Zählungen",
                            fr: "Comptes corrects",
                            ru: "Правильные счета",
                            ja: "正しいカウント",
                            "es-ES": "Cuentas correctas",
                        },
                    },
                    fails: {
                        desc: "Failed counts",
                        translations: {
                            de: "Falsche Zählungen",
                            fr: "Comptes échoués",
                            ru: "Неудачные счета",
                            ja: "失敗したカウント",
                            "es-ES": "Cuentas fallidas",
                        },
                    },
                    mathcounts: {
                        desc: "Math counts",
                        translations: {
                            de: "Mathe Zählungen",
                            fr: "Math Comptes",
                            ru: "Счета математики",
                            ja: "数学カウント",
                            "es-ES": "Cuentas de matemáticas",
                        },
                    },
                },
            },
        },
    },
    admin_help: {
        desc: "Show an overview of all admin commands.",
        translations: {
            de: "Zeig eine Übersicht aller Admin-Befehle.",
            fr: "Afficher un aperçu de toutes les commandes d'administration.",
            ru: "Показать обзор всех административных команд.",
            ja: "すべての管理者コマンドの概要を表示します。",
            "es-ES": "Muestra una descripción general de todos los comandos de administración.",
        },
    },
    reset_guild: {
        desc: "Reset the count of the guild",
        translations: {
            de: "Setze den Zähler des Servers zurück",
            fr: "Réinitialiser le compteur de la guilde",
            ru: "Сбросить счетчик гильдии",
            ja: "ギルドのカウントをリセットする",
            "es-ES": "Restablecer el recuento del gremio",
        },
    },
    set_channel: {
        desc: "Set the counting channel.",
        translations: {
            de: "Setze den Zählkanal.",
            fr: "Définir le canal de comptage.",
            ru: "Установить канал подсчета.",
            ja: "カウントチャンネルを設定します。",
            "es-ES": "Establecer el canal de recuento.",
        },
        options: {
            channel: {
                desc: "The name of the channel to set",
                translations: {
                    de: "Der Name des zu setzenden Kanals",
                    fr: "Le nom du canal à définir",
                    ru: "Имя канала для установки",
                    ja: "設定するチャンネルの名前",
                    "es-ES": "El nombre del canal para establecer",
                },
            },
        },
    },
    set_language: {
        desc: "Set the server language for the bot.",
        translations: {
            de: "Setze die Server-Sprache für den Bot.",
            fr: "Définir la langue du serveur pour le bot.",
            ru: "Установить язык сервера для бота.",
            ja: "ボットのサーバー言語を設定します。",
            "es-ES": "Establecer el idioma del servidor para el bot.",
        },
        options: {
            language: {
                desc: "The language to set",
                translations: {
                    de: "Die zu setzende Sprache",
                    fr: "La langue à définir",
                    ru: "Язык для установки",
                    ja: "設定する言語",
                    "es-ES": "El idioma para establecer",
                },
            },
        },
    },
    set_timeout: {
        desc: "Configure a timeout for losers.",
        translations: {
            de: "Konfiguriere ein Time-Out für Verlierer.",
            fr: "Configurer une temporisation pour les perdants.",
            ru: "Настройте тайм-аут для проигравших.",
            ja: "敗者のタイムアウトを設定します。",
            "es-ES": "Configure un tiempo de espera para los perdedores.",
        },
        options: {
            timeout: {
                desc: "Timeout in minutes or 0 to disable",
                translations: {
                    de: "Time-Out in Minuten oder 0 zum Deaktivieren",
                    fr: "Délai d'attente en minutes ou 0 pour désactiver",
                    ru: "Тайм-аут в минутах или 0 для отключения",
                    ja: "タイムアウト（分単位）または0を無効にする",
                    "es-ES": "Tiempo de espera en minutos o 0 para desactivar",
                },
            },
        },
    },
    toggle_arithmetic: {
        desc: "Enable/Disable support for arithmetic expressions.",
        translations: {
            de: "Aktiviere/Deaktiviere die Verwendung für arithmetische Ausdrücke.",
            fr: "Activer/Désactiver la prise en charge des expressions arithmétiques.",
            ru: "Включить/Отключить поддержку арифметических выражений.",
            ja: "算術式のサポートの有効化/無効化。",
            "es-ES": "Activar/Desactivar el soporte para expresiones aritméticas.",
        },
        options: {
            enabled: {
                desc: "Enable or disable arithmetic expressions",
                translations: {
                    de: "Aktiviere oder deaktiviere arithmetische Ausdrücke",
                    fr: "Activer ou désactiver les expressions arithmétiques",
                    ru: "Включить или отключить арифметические выражения",
                    ja: "算術式の有効化/無効化",
                    "es-ES": "Activar o desactivar expresiones aritméticas",
                },
            },
        },
    },
    cheat_mode: {
        desc: "Enable/Disable cheat mode (no failing).",
        translations: {
            de: "Aktiviere/Deaktiviere den Cheat-Modus (kein Verlieren).",
            fr: "Activer/Désactiver le mode triche (pas d'échec).",
            ru: "Включить/Отключить режим читов (без неудач).",
            ja: "チートモード（失敗なし）の有効化/無効化。",
            "es-ES": "Activar/Desactivar el modo trampa (sin fallas).",
        },
        options: {
            enabled: {
                desc: "Enable or disable cheat mode",
                translations: {
                    de: "Aktiviere oder deaktiviere den Cheat-Modus",
                    fr: "Activer ou désactiver le mode triche",
                    ru: "Включить или отключить режим читов",
                    ja: "チートモードの有効化/無効化",
                    "es-ES": "Activar o desactivar el modo trampa",
                },
            },
            startcount: {
                desc: "The number to start counting from (default: 0)",
                translations: {
                    de: "Die Zahl, ab der gezählt werden soll (Standard: 0)",
                    fr: "Le nombre à partir duquel commencer à compter (par défaut: 0)",
                    ru: "Число, с которого начинать считать (по умолчанию: 0)",
                    ja: "カウントを開始する数（デフォルト：0）",
                    "es-ES": "El número desde el que comenzar a contar (predeterminado: 0)",
                },
            },
        },
    },
    calc: {
        desc: "Evaluate a math expression",
        translations: {
            de: "Berechne einen mathematischen Ausdruck",
            fr: "Évaluer une expression mathématique",
            ru: "Вычислить математическое выражение",
            ja: "数式を評価する",
            "es-ES": "Evaluar una expresión matemática",
        },
        options: {
            expression: {
                desc: "The expression to evaluate",
                translations: {
                    de: "Der auszuwertende Ausdruck",
                    fr: "L'expression à évaluer",
                    ru: "Выражение для вычисления",
                    ja: "評価する式",
                    "es-ES": "La expresión a evaluar",
                },
            },
        },
    },
    oeis: {
        desc: "Search the OEIS for a sequence",
        translations: {
            de: "Durchsuche die OEIS nach einer Sequenz",
            fr: "Rechercher la séquence OEIS",
            ru: "Поиск последовательности OEIS",
            ja: "OEISでシーケンスを検索する",
            "es-ES": "Buscar la secuencia OEIS",
        },
        options: {
            sequence: {
                desc: "The sequence to search for",
                translations: {
                    de: "Die zu suchende Sequenz",
                    fr: "La séquence à rechercher",
                    ru: "Последовательность для поиска",
                    ja: "検索するシーケンス",
                    "es-ES": "La secuencia a buscar",
                },
            },
        },
    },
    cooldown: {
        desc: "Cooldown for new members before they can count",
        translations: {
            de: "Abklingzeit für neue Mitglieder, bevor sie zählen können",
            fr: "Temps de recharge pour les nouveaux membres avant qu'ils ne puissent compter",
            ru: "Время отката для новых участников, прежде чем они смогут посчитать",
            ja: "カウントできるようになる前の新しいメンバーのクールダウン",
            "es-ES": "Tiempo de espera para nuevos miembros antes de que puedan contar",
        },
        options: {
            timeout: {
                desc: "Cooldown in minutes or 0 to disable",
                translations: {
                    de: "Abklingzeit in Minuten oder 0 zum Deaktivieren",
                    fr: "Temps de recharge en minutes ou 0 pour désactiver",
                    ru: "Время отката в минутах или 0 для отключения",
                    ja: "クールダウン（分単位）または0を無効にする",
                    "es-ES": "Tiempo de espera en minutos o 0 para desactivar",
                },
            },
        },
    },
    timeout_increment: {
        desc: "Factor to increment the timeout for losers.",
        translations: {
            de: "Faktor, um das Time-Out für Verlierer zu erhöhen.",
            fr: "Facteur pour incrémenter le délai d'attente pour les perdants.",
            ru: "Фактор для увеличения тайм-аута для проигравших.",
            ja: "敗者のタイムアウトを増やすための要因。",
            "es-ES": "Factor para incrementar el tiempo de espera para los perdedores.",
        },
        options: {
            factor: {
                desc: "1 = no increment, 2 = double the timeout on each fail, etc.",
                translations: {
                    de: "1 = kein Inkrement, 2 = Timeout bei jedem Fehler verdoppeln, etc.",
                    fr: "1 = pas d'incrément, 2 = doubler le délai d'attente à chaque échec, etc.",
                    ru: "1 = без увеличения, 2 = удвоить время ожидания при каждом сбое и т. д.",
                    ja: "1 =インクリメントなし、2 =失敗ごとにタイムアウトを2倍にするなど。",
                    "es-ES": "1 = sin incremento, 2 = duplicar el tiempo de espera en cada error, etc.",
                },
            },
        },
    },
    global_stats: {
        desc: "View your servers rank on the global leaderboard.",
        translations: {
            de: "Zeige deinen Server-Rang auf der globalen Bestenliste.",
            fr: "Afficher le classement de votre serveur sur le classement mondial.",
            ru: "Просмотреть ранг вашего сервера в глобальном рейтинге.",
            ja: "グローバルリーダーボードでサーバーのランクを表示します。",
            "es-ES": "Ver la clasificación de tu servidor en la clasificación global.",
        },
    },
    vote: {
        desc: "If you enjoy the bot, please consider voting for it!",
        translations: {
            de: "Wenn dir der Bot gefällt, bitte vote für ihn!",
            fr: "Si vous aimez le bot, pensez à voter pour lui !",
            ru: "Если вам нравится бот, пожалуйста, проголосуйте за него!",
            ja: "ボットが気に入ったら、投票してください！",
            "es-ES": "Si te gusta el bot, ¡considera votar por él!",
        },
    },
    silent_mode: {
        desc: "Make the bot not show if a count is correct or not.",
        translations: {
            de: "Lass den Bot nicht anzeigen, ob eine Zählung korrekt ist oder nicht.",
            fr: "Faites en sorte que le bot ne montre pas si un compte est correct ou non.",
            ru: "Сделайте так, чтобы бот не показывал, правильно ли счет или нет.",
            ja: "ボットがカウントが正しいかどうかを表示しないようにします。",
            "es-ES": "Haz que el bot no muestre si un recuento es correcto o no.",
        },
        options: {
            enabled: {
                desc: "Enable or disable silent mode",
                translations: {
                    de: "Aktiviere oder deaktiviere den Silent-Modus",
                    fr: "Activer ou désactiver le mode silencieux",
                    ru: "Включить или отключить тихий режим",
                    ja: "サイレントモードの有効化/無効化",
                    "es-ES": "Activar o desactivar el modo silencioso",
                },
            },
        },
    },
    math_fact: {
        desc: "Get a random math fact.",
        translations: {
            de: "Erhalte einen zufälligen Mathe-Fakt (auf Englisch)",
            fr: "Obtenez un fait mathématique aléatoire (en anglais)",
            ru: "Получить случайный математический факт (на английском языке)",
            ja: "ランダムな数学の事実を取得します（英語）",
            "es-ES": "Obtenga un hecho matemático aleatorio (en inglés)",
        },
    },
};
