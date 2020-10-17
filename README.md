# Тестовое задание

Необходимо реализовать функциональную форму для множества элементов согласно макета.

Что требуется:

1. Сверстать страницу согласно макета.

    Важно:
    - выдержать поля и отступы;
    - выдержать размеры элементов управления (кнопок, заголовка таблицы, полей ввода) и их
    относительное положение;
    - размеры самой страницы и блоков значения не имеют;
    - hover и пр. эффекты на свое усмотрение;
    - адаптивная верстка не требуется.
2. Список должен функционировать следующим образом:

    2.1 Чекбоксы(см. крайняя левая колонка):
    - каждый элемент имеет чекбокс для выбора (см. крайняя левая колонка);
    - данный чекбокс отмечает элемент только для выполнения над ним какого либо действия
    (в данном случае удаления);
    - допустимо проставления отметок на нескольких элементах;
    - чекбокс меняет состояние только при клике на сам чекбокс, клик на элемент чекбокс не
    меняет;
    - нажатие на иконку чекбокса в шапке таблице( см. крайняя левая колонка) отмечает все
    элементы или если отмечены все элементы — снимает все отметки.

    2.2. Элемент:
    - помимо чекбокса, элемент может быть выбран для редактирования кликом по самому
    элементу(контейнеру элемента);
    - выбранный элемент подсвечивается (как «Элемент #1») и становится доступен в форме
    редактирования в правом блоке;
    - выбирать одновременно несколько элементов списка нельзя.

3. Реализовать добавление элементов в список с помощью кнопки ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/addBtn.svg)
    - элемент создается и сразу добавляется в список, а так же становится выделенным для
    редактирования;
    - по-умолчанию при создании нового элемента:
    - поле «Название» равно «Без названия»,
    - поле «Описание» равно пустой строке,
    - флаг Видимый выставлен в true;

4. Реализовать редактирование элемента в форме (правый блок):
    - изменения применяются только при нажатии кнопки «Применить»;
    - при нажатии «Отменить» изменения отменяются, т. е. возвращаются исходные (до
    редактирования) значения элемента;
    - если ни один элемент не выделен для редактирования, то поля ввода и кнопки должны
    быть пустыми и заблокированными (disabled).

5. Реализовать удаление выбранных с помощью чекбоксов элементов:
    - если не выбрано не одного элемента, кнопка должны быть заблокирована (disabled);
    - нажатие кнопки ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/deleteBtn.svg) вызывает модальное окно (confirm) для подтверждения удаления;
    - удаляются все выбранные элементы.

6. Реализовать фильтрацию «видимых» и «невидимых» элементов:
    - с помощью кнопок ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/visible_active.svg) ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/hidden_inactive.svg) возможно отфильтровать видимые или не видимые элементы;
    - каждая кнопка работает как toggle (например, нажатие на ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/visible_inactie.svg) отобразит все «видимые»
    элементы, повторное нажатие выключит отображение всех «видимых» элементов);
    - состояние фильтра (вкл/выкл) визуализируется по цвету кнопки (активный цвет ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/visible_active.svg) —
    отображение включено, серый ![](https://github.com/TIBET7/test_task_Consist/blob/master/source/img/visible_inactie.svg) — выключено)
    - возможно активация одновременно двух фильтров, что означает показывать все элементы;
    - но отключать одновременно оба нельзя, т. е. клик по активной кнопке при выключенной
    второй не должен приносить никакого эффекта.

Бонус:

    1. Реализовать сортировку по полю «Название» (по-возрастанию, по-убыванию):
    - по-умолчанию: по-возрастанию;
    - учитывать сортировку при создании нового и редактировании элемента.
    2. Реализовать скроллинг списка с фиксацией шапки как на макете Frame 2
    3. Реализовать хранение списка элементов в localStorage или облачной БД
